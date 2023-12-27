import { createServer } from "http";
import { Server } from "socket.io";
const matched_ids = {};
const match_meta = {};
const corsOptions = {
  origin: "*",
};
export const http = createServer();
export const io = new Server(http, { cors: corsOptions });
io.on("connection", function (socket) {
  console.log("socket connected");
  socket.on("attack_start", (data) => {
    sending_attack_start(socket, data);
  });
  socket.on("change_phase", (data) => {
    sending_change_phase(socket, data);
  });
  seeking_match(socket);
});
const sending_attack_start = (socket, data) => {
  io.to(matched_ids[socket.id]).emit("opponent_attack_start", {
    data: data,
  });
};
const sending_change_phase = (socket, data) => {
  io.to(matched_ids[socket.id]).emit("opponent_change_phase", {
    data: data,
  });
};
const seeking_match = (socket) => {
  let has_space = false;

  for (const key of Object.keys(matched_ids)) {
    if (!matched_ids[key]) {
      has_space = true;
      matched_ids[key] = socket.id;
      matched_ids[socket.id] = key;
      // a dictionary to record info for the match
      match_meta[get_match_unique_id(key, socket.id)] = {
        effect: {}, // to deal with current effect chainings
      };
      //decides who starts first
      const both_players = [socket.id, key];
      const player_starts =
        both_players[Math.floor(Math.random() * both_players.length)];

      //notify both players that they are matched with each other
      io.to(key).emit("matched", {
        my_id: key,
        opponent: socket.id,
        player_starts: player_starts,
      });
      io.to(socket.id).emit("matched", {
        my_id: socket.id,
        opponent: key,
        player_starts: player_starts,
      });
      break;
    }
  }

  if (!has_space) {
    // start to wait for a potential match
    matched_ids[socket.id] = false;
  }
};

const get_match_unique_id = (player1, player2) => {
  let players = [player1, player2];
  players.sort((a, b) => a.localeCompare(b));
  return players.join("-");
};
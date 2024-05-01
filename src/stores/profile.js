import { defineStore } from "pinia";

export default defineStore("profile", {
  state: () => ({
    id: 1,
    username: "adrian.german",
    avatar: "/avatars/avatar-02.jpg",
    status: "active",
  }),
});

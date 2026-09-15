const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Express JSON limit set karein (Large audio files ke liye)
app.use(express.json({ limit: '50mb' }));

// CORS headers configuration
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    // Pre-flight OPTIONS request handling
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

// Classify Route
app.post('/api/classify', async (req, res) => {
    try {
        const { instructions, manual, audioBase64, mimeType } = req.body;
        console.log("Audio received for analysis successfully!");

        // Sample Response (Yahan aapka Gemini logic execute hoga)
        res.json({
            success: true,
            result: "Call Analysis completed successfully!"
        });
    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

import arcjet, { tokenBucket } from "@arcjet/next";

const aj = arcjet({
    key: process.env.ARCJET_KEY,
    characteristic: ["userId"],
    rules: [
        tokenBucket({
            mode: "LIVE",
            refillRate: 2,
            interval: 3600,
            capacity: 10,
        })
    ]
})

export default aj;
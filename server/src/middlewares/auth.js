
import jwt from 'jsonwebtoken';

export const cookieAutn = async (req, res, next) => {
    try {
        const cookies = req.headers.cookie;
        if (!cookies) {
            return res.status(404).json({
                "result": false,
                "message": "Noso active session"
            });
        }
        const token = cookies.split("=")[1];
        console.log("token", token);
        console.log(cookies);
        if (!token) {
            return res.status(404).json({
                "result": "fails",
                "message": "session expired"
            });
        }

        jwt.verify(String(token), process.env.SECRET_KEY, (error, user) => {
            console.log(user);
            if (error) {
                return res.status(400).json({ 'result': false, message: "invalid token", user })
            }
            console.log("usr auth", user);
            req.id = user.id;
        })
    } catch (err) {
        console.log(err.message)

    }
    next();
}

export const refreshToken = async (req, res, next) => {
    try {
        const cookies = req.headers.cookie;
        const prevToken = cookies.split("=")[1];
        if (!prevToken) {
            return res.status(404).json({
                "result": "fails",
                "message": "session expired"
            });
        }
        jwt.verify(String(prevToken), process.env.SECRET_KEY, (error, user) => {
            if (error) {
                return res.status(400).json({ 'result': false, message: "invalid token" })
            }
            res.clearCookie(String(user.id)) // clearing prev token
            const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
                expiresIn: "60s"
            });
            res.cookie(String(user.id), token, {
                path: '/',
                expires: new Date(Date.now() + 30 * 1000),
                httpOnly: true,
                sameSite: 'lax'
            });

            req.id = user.id;

        })


    } catch (err) {
        console.log(err.message)
    }
    next();
}


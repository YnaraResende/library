import express from "express"
import libraryRoutes from "../routes/LibraryRoutes"

const router = (app: express.Router) => {
    app.use('/library', libraryRoutes)
}

export default router;
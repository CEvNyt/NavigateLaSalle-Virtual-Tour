const mongoose = require('mongoose');

const sceneSchema = new mongoose.Schema(
    {
        _id: { type: String, required: true }, 
        title: String,
        category: String,
        sub_category: String,

        panorama_url: String,

        initial_view: {
            yaw: Number,
            pitch: Number,
            hfov: Number,
        },

        navigation_markers: [
            {
            id: String,
            target_scene_id: String,
            yaw: Number,
            pitch: Number,
            icon_url: String,
            tooltip: String
            }
        ],

        info_markers: [
            {
            id: String,
            yaw: Number,
            pitch: Number,
            icon_url: String,
            tooltip: String,
            }
        ],

         modal: {
            title: String,
            description: String,
            gallery: [String], 
            audio_url: String
            },

        links: [
            {
            nodeId: String,
            yaw: Number,
            pitch: Number
            }
        ],

        }, {
        collection: "scenes",
        timestamps: true
        });

module.exports = mongoose.model("Scene", sceneSchema);

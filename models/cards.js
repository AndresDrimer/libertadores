import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const cardsSchema = new Schema(
    
_id= new ObjectId,
absoluteNum= Number,
teamNum= Number,
playerName= String || null,
isSelected= Boolean,
team= String

)
import { Schema, Types, model, Model } from "mongoose";
import { Brand } from "../interfaces/brand.interface";

const BrandSchema = new Schema<Brand>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const BrandModel = model("brand", BrandSchema);
export default BrandModel;

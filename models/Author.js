import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema(
/*   {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },

    country: {
      type: String,
      required: true,
      trim: true,
    },
    birthdate: {
      type: Date,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
      trim: true,
    },
    active: {
     type: Boolean,
     required: true,
     default: true,
    },
    //createdBy: {
      //type: mongoose.Schema.Types.ObjectId,
    //  required: true,
      //ref: 'User',
 //   },
  },
  {
    timestamps: true,
  } */
  {
    name: { type: String, require: true },
    last_name: { type: String },
    city: { type: String, require: true },
    country: { type: String, require: true },
    date: { type: Date },
    photo: { type: String, require: true },
    user_id: { type: mongoose.Types.ObjectId, ref: 'users', require: true },
    active: { type: Boolean, require: true }
},{
    timestamps: true
}
);

const Author = mongoose.model('Author', authorSchema);

export default Author;

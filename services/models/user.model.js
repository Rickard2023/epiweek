import { Schema, model } from "mongoose";

/* template for Postman
// author model
{
	  "name": "test5",
      "surname": "test5",
      "email":"test5@test.test",
      "dob":"na",
      "pfp":"na"
}
*/
const userSchema = new Schema (
    {
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        dob: {
            type: String,
            required: true
        },
        pfp: {
            type: String,
            required: false
        },
        avatar: {
            type: String,
            required: false
        }
    },

    {
        collection: "users"
    }
)

export default model("User", userSchema);

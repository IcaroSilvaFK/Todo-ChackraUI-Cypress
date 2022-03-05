import * as yup from "yup";

export const schemaTask = yup.object().shape({
  newTask: yup
    .string()
    .min(5, "A nova task precisa ter no minímo 5 caracteres")
    .required(),
});

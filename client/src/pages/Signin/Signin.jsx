import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUser } from "../../api/user";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
import { use } from "react";

const Signin = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Il faut preciser votre email")
      .email("L'email n'est pas valide"),
    password: yup
      .string()
      .required("Il faut preciser votre mot de passe")
      .min(6, "Mot de passe trop court"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const {
    setError,
    clearErrors,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    initialValues,
    resolver: yupResolver(validationSchema),
  });

  const submit = handleSubmit(async (user) => {
    console.log("Données soumises :", user); // Ajouter ceci pour voir les données
    try {
      clearErrors();
      // await loginUser(user); // Appelle l'API avec les données de l'utilisateur
      await login(user)
      navigate("/profile");
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  });

  return (
    <div>
      <h2>SignIn</h2>
      <form onSubmit={submit}>
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="tanodylane@gmail.com"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <input
            className={errors.password ? "errors" : ""}
            {...register("password")}
            type="password"
            placeholder="1237#$53"
          />
          {errors.password && (
            <p className={errors ? "errors" : ""}>{errors.password.message}</p>
          )}
        </div>
        <div>
          <button disabled={isSubmitting}>Se connecter</button>
        </div>
      </form>
    </div>
  );
};

export default Signin;

import { Formik, Form, Field, FormikHelpers } from "formik";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Loader } from "@/shared/components";
import { Fox } from "@/models";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const [framerloop, setFramerLoop] = useState<any>("demand");
  const initialValues: FormValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleFocus = (e: any) => {
    // Custom focus logic here
    setFramerLoop("always");
    setCurrentAnimation("walk");
    console.log(`${e.target.name} is focused`);
  };

  const handleBlur = (e: any) => {
    // Custom blur logic here
    setFramerLoop("demand");
    setCurrentAnimation("idle");
    console.log(`${e.target.name} is blurred`);
  };

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      setCurrentAnimation("hit");
      const formData: any = {
        from_name: values.name,
        to_name: "Amaan",
        from_email: values.email,
        to_email: "kurehiamaan91@gmail.com",
        message: values.message,
      };
      const response = await emailjs.send(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        formData,
        process.env.PUBLIC_KEY
      );
      if (response.status == 200) {
        toast.success("Email Send Succesfully");
      } else {
        toast.error("Something Went Wrong Please Try Latter");
      }
    } catch (error) {
      toast.error("Something Went Wrong Please Try Latter");
    } finally {
      resetForm();
      setCurrentAnimation("idle");
      setSubmitting(false);
    }
  };

  return (
    <section className="relative flex lg:h-[100vh] lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h2 className="text-[25px] font-semibold">
          Let's,
          <span className="blue-gradient_text ml-3 font-semibold drop-shadow">
            Connect{" "}
          </span>
        </h2>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="w-full flex flex-col gap-7 mt-12">
              <label className="font-semibold" htmlFor="name">
                Name
                <Field
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="input"
                  required
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </label>
              <label className="font-semibold" htmlFor="email">
                Email
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@example.com"
                  className="input"
                  required
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </label>
              <label className="font-semibold" htmlFor="message">
                Message
                <Field
                  as="textarea"
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Your message"
                  className="textarea"
                  required
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </label>
              <button
                type="submit"
                className="btn"
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[100vh]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
          frameloop={framerloop}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

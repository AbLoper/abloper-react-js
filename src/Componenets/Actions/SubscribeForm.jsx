import { useForm } from "react-hook-form";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { useState } from "react";

export default function SubscribeForm() {

    const [success, setSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({ mode: "onSubmit" });

    const onSubmit = async (data) => {
        try {
            const response = await fetch("https://api.abloper.com/api/subscribers", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            //1
            // if (!response.ok) throw new Error();

            //2
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || "خطأ غير معروف");
            }

            reset();
            setSuccess(true);
        } catch (error) {
            setSuccess(false);
            alert("حدث خطأ أثناء الإرسال ❌");
        }
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-100">

            <MDBContainer fluid className="d-flex flex-column flex-lg-row gap-2 w-100">

                <input
                    type="email"
                    placeholder="Enter Your Email"
                    aria-invalid={errors.email ? "true" : "false"}
                    className={`rounded-3 flex-grow-1 ps-3 ${errors.email ? "border border-danger" : ""
                        }`}
                    {...register("email", {
                        required: "البريد الإلكتروني مطلوب",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "يرجى إدخال بريد إلكتروني صحيح",
                        },
                    })}
                />

                <MDBBtn
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-3 px-4 text-light border"
                >
                    {isSubmitting ? "Sending..." : "Keep Me Posted"}
                </MDBBtn>

            </MDBContainer>

            {/* رسالة الخطأ */}
            {errors.email && (
                <span className="text-danger small mt-2 d-block text-center text-lg-start">
                    {errors.email.message}
                </span>
            )}

            {/* رسالة النجاح */}
            {success && (
                <span className="text-success small mt-2 d-block text-center text-lg-start">
                    تم الاشتراك بنجاح ✅
                </span>
            )}

        </form>
    );
}

import CustomButton from "../../components/CustomButton";
import SignUpLoginLayout from "../../components/SignUpLoginLayout";

export default function Index() {
  return (
    <SignUpLoginLayout>
      <CustomButton name="Patient" href="/signup/patient" />
      <CustomButton name="Doctor" href="/signup/doctor" />
    </SignUpLoginLayout>
  );
}

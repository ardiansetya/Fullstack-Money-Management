import { Input } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";

const FieldInput = ({ label, placeholder, className }) => {
  return (
    <Field label={label} className={className}>
      <Input className="px-5 border-2 rounded-xl border-gray-500" placeholder={placeholder} />
    </Field>
  );
};

export default FieldInput;
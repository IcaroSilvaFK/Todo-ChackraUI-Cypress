import React, { FC } from "react";
import { Alert, Input, CloseButton, Box } from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";

export const TextInput: FC<{
  name: string;
  placeholder: string;
  type: string;
}> = ({ name, placeholder, type }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Box display="flex" flexDirection="column" pos="relative">
          <Input
            placeholder={placeholder}
            width="30rem"
            borderColor="#fff"
            {...field}
            type={type}
          />

          {errors[name] ? (
            <Alert
              status="error"
              position="absolute"
              top="40px"
              borderRadius="1xl"
            >
              {errors[name]?.message}
            </Alert>
          ) : (
            <></>
          )}
        </Box>
      )}
    />
  );
};

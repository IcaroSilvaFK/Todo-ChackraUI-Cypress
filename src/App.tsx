import { Box, Button, Container, Heading } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { v4 as isUuid } from "uuid";
import { TextInput } from "./components/InputComponent";
import { schemaTask } from "./schemas/newTask.yup";
import { useTodoContext } from "./hooks/useTodoContext";
import "./css/styles.scss";

interface IPropsForm {
  newTask: string;
}

function App() {
  const { handleAddNewTodo, todos, isTodo } = useTodoContext();

  const methods = useForm<IPropsForm>({
    defaultValues: {
      newTask: "",
    },
    resolver: yupResolver(schemaTask),
  });

  const onSubmit = (data: IPropsForm) => {
    const newTask = {
      newTask: data.newTask,
      id: isUuid(),
      isComplet: false,
    };
    handleAddNewTodo(newTask);
    methods.reset();
  };

  return (
    <Box h="100vh" w="100vw">
      <Box display="flex" justifyContent="center">
        <Heading fontFamily="sans-serif" paddingTop="2.9rem">
          Todo-List
        </Heading>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Container display={"flex"} p="3rem" gap="10px">
              <TextInput name="newTask" placeholder="new task" type="text" />
              <Button
                variant="solid"
                bg="cyan.300"
                shadow="md"
                type="submit"
                flexShrink={0}
              >
                Create new task
              </Button>
            </Container>
          </form>
        </FormProvider>
      </Box>
      <Box p="5rem">
        <ul className="containerTasks">
          {isTodo
            ? ""
            : todos?.map((element) => (
                <li key={element.id}>
                  <>{element.newTask}</>
                </li>
              ))}
        </ul>
      </Box>
    </Box>
  );
}

export default App;

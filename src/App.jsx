import {
  Button,
  Stack,
  Input,
  Heading,
  Container,
  Text,
  Image,
  Skeleton,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [image, updateImage] = useState(false);
  const [prompt, updatePrompt] = useState("");
  const [loading, updateLoading] = useState(false);

  const generate = async (prompt) => {
    updateLoading(true);
    const result = await axios.get(`http://127.0.0.1:8000/?prompt=${prompt}`);
    updateImage(result.data);
    updateLoading(false);
  };

  return (
    <Container>
      <Heading marginTop="20px">ArtiWrite 🤳</Heading>
      <Text marginTop="20px">
        Unleash your creativity and express yourself in exciting new ways, all
        without needing any artistic or design skills. Simply input your text,
        and our AI model will generate an image that perfectly captures the
        essence of your words.
      </Text>
      <Stack spacing={2} direction="row" marginTop="20px">
        <Input
          placeholder="Anime girl with wolfcut"
          value={prompt}
          onChange={(e) => updatePrompt(e.target.value)}
        />
        <Button onClick={(e) => generate(prompt)}>Submit</Button>
      </Stack>
      <Stack marginTop="20px">
        <Skeleton fadeDuration={1} isLoaded={!loading} height="40px">
          {image ? <Image src={`data:image/png;base64,${image}`} /> : null}
        </Skeleton>
      </Stack>
    </Container>
  );
};

export default App;

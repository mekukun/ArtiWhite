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
      <Heading marginTop="20px">ImageNeko 😻</Heading>
      <Text marginTop="20px">
        Create stunning anime-style images with our text-to-image AI generator,
        powered by Stable Diffusion technology! Our cutting-edge AI algorithm is
        trained on massive datasets of anime images, enabling it to generate
        unique, high-quality visuals that perfectly capture the essence of your
        text.
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

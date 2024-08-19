import { Text, Flex, TextField, TextArea, Button, Box } from "@radix-ui/themes";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/Shop.css";

function Shop() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cd68yqw", "template_q5hq01s", form.current, {
        publicKey: "7EfzjspcRVW6tVC84",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          window.alert("Your message has been sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          window.alert(
            "There was an error in regards to sending your message:",
            error.text
          );
        }
      );
  };

  return (
    <article>
      <Text as="p" size="8" weight="bold" style={{ margin: "20px" }}>
        Contact Me
      </Text>
      <Text as="p" size="4" style={{ margin: "20px" }}>
        Feel free to message for any questions, thoughts, or suggestions!
      </Text>
      <form ref={form} onSubmit={sendEmail}>
        <Flex direction="column" gap="5" align="center">
          <Box width="50%" minWidth="300px">
            <TextField.Root
              name="user_email"
              type="email"
              size="3"
              variant="soft"
              color="pink"
              radius="large"
              placeholder="Email"
              required
            >
              <TextField.Slot>✉</TextField.Slot>
            </TextField.Root>
          </Box>

          <Box width="50%" minWidth="300px">
            <TextField.Root
              name="user_subject"
              size="3"
              variant="soft"
              color="pink"
              radius="large"
              placeholder="Subject"
              required
            >
              <TextField.Slot>📘</TextField.Slot>
            </TextField.Root>
          </Box>

          <Box width="50%" minWidth="300px">
            <TextArea
              name="user_comment"
              size="3"
              variant="soft"
              color="pink"
              placeholder="Comment"
              required
            />
          </Box>

          <Button size="3" style={{ backgroundColor: "hotpink" }}>
            Send
          </Button>
        </Flex>
      </form>
    </article>
  );
}

export default Shop;

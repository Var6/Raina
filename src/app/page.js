import { Box } from "@radix-ui/themes";
import { Container } from "postcss";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Box style={{ background: "var(--gray-a2)", borderRadius: "var(--radius-3)" }}>
          <Container size="1">
              <Box py="9" />
          </Container>
      </Box>  

    </div>
  );
}

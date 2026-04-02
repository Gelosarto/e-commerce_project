import Images from "./components/Images";
import Text from "./components/Text";

export default function Home() {
  return (
    <main>
      <main className="w-full">
        <div className="flex flex-col md:flex-row w-full">
          <Images />
          <Text />
        </div>
      </main>
    </main>
  );
}

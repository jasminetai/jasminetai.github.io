export default function Header(props: { text: string }) {
  return (
    <div className="flex flex-row py-4">
      <div className="text-3xl font-extrabold sm:text-4xl">&gt;</div>
      <div className="flex flex-col gap-2 ml-4">
        <h1 className="text-3xl font-extrabold after:content-['|'] after:animate-[blink_1s_step-end_infinite] sm:text-4xl">{ props.text }</h1>
      </div>
    </div>
  );
}
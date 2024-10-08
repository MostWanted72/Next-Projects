interface Props {
  children: React.ReactNode;
}

export default function LayoutDrinks({ children }: Props) {
  return (
    <div className="max-w-xl">
      <div className="mockup-code mb-8">
        <pre data-prefix="$">
          <code>npx create-next-app@latest to-do</code>
        </pre>
      </div>
      {children}
    </div>
  );
}

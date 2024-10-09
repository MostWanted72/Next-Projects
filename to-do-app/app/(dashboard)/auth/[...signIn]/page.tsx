interface Props {
  params: {
    signIn: string;
  };
}

export default function SignInPage({ params }: Props) {
  console.log("check this part", params);
  return <h1 className="text-7xl">Sign In</h1>;
}

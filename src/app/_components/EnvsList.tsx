export const EnvsList = () => {
  return (
    <ol>
      <li>
        TEST_ENV: <span>{process.env.TEST_ENV}</span>
      </li>
      <li>
        NEXT_PUBLIC_TEST_ENV: <span>{process.env.NEXT_PUBLIC_TEST_ENV}</span>
      </li>
    </ol>
  );
};

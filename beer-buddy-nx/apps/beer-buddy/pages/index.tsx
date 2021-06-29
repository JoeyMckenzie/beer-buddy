import Link from 'next/link';
import {
  selectDarkMode,
  selectLoading,
  setDarkMode,
  setLoading,
  useAppDispatch,
  useAppSelector,
} from '@beer-buddy-nx/shared';

const IndexPage = () => {
  const darkMode = useAppSelector(selectDarkMode);
  const loading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <button onClick={() => dispatch(setDarkMode(!darkMode))}>
        dark mode
      </button>
      <span>{darkMode ? 'enabled' : 'disabled'}</span>
      <br />
      <br />
      <button onClick={() => dispatch(setLoading(!loading))}>loading</button>
      <span>{loading ? 'loading' : 'idle'}</span>
    </div>
  );
};

export default IndexPage;

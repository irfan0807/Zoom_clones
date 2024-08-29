import { useRouter } from 'next/router';

const useNavigate = () => {
  const router = useRouter();
  
  const navigate = (path: string) => {
    router.push(path);
  };

  return navigate;
};

export default useNavigate;

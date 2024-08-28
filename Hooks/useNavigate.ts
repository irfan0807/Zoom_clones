import { useRouter } from 'next/router';

const useNavigate = (path:string) => {
  const router = useRouter();
  
  const navigate = () => {
    router.push(path);
  };

  return navigate;
};

export default useNavigate;
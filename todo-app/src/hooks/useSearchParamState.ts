import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState } from "react";

const useSearchParamState = (paramName: string) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const initialValue = searchParams.get(paramName) || "";
  const [value, setValue] = useState<string>(initialValue);

  const updateParam = (newValue: string) => {
    setValue(newValue);
    const params = new URLSearchParams(searchParams.toString());
    if (newValue) {
      params.set(paramName, newValue);
    } else {
      params.delete(paramName);
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return [value, updateParam] as const;
};

export default useSearchParamState;

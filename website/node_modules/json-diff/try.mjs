import { diffString, diff } from 'json-diff'
  const patch = diffString(
    { 
      services: [],
    },
    {
      services: [{ service_code: '123' }],
    }
  );

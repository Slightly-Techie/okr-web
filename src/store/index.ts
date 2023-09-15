import { create } from "zustand";

// change this type to fit the actual model
interface TestType {
  objectives: string[];
  keyResluts: string[];
}

// export const useStore = create<TestType>((_) => ({
//   objectives: ["Setup Project Structure"],
//   keyResluts: ["Finish Project on time"],
// }));

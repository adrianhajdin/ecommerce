import { dataSource } from "@medusajs/medusa/dist/loaders/database";
import { OnboardingState } from "../models/onboarding";

const OnboardingRepository = dataSource.getRepository(OnboardingState);

export default OnboardingRepository;

import { TransactionBaseService } from "@medusajs/medusa";
import OnboardingRepository from "../repositories/onboarding";
import { OnboardingState } from "../models/onboarding";
import { EntityManager, IsNull, Not } from "typeorm";
import { UpdateOnboardingStateInput } from "../types/onboarding";

type InjectedDependencies = {
  manager: EntityManager;
  onboardingRepository: typeof OnboardingRepository;
};

class OnboardingService extends TransactionBaseService {
  protected onboardingRepository_: typeof OnboardingRepository;

  constructor({ onboardingRepository }: InjectedDependencies) {
    super(arguments[0]);

    this.onboardingRepository_ = onboardingRepository;
  }

  async retrieve(): Promise<OnboardingState | undefined> {
    const onboardingRepo = this.activeManager_.withRepository(
      this.onboardingRepository_
    );

    const status = await onboardingRepo.findOne({
      where: { id: Not(IsNull()) },
    });

    return status;
  }

  async update(data: UpdateOnboardingStateInput): Promise<OnboardingState> {
    return await this.atomicPhase_(
      async (transactionManager: EntityManager) => {
        const onboardingRepository = transactionManager.withRepository(
          this.onboardingRepository_
        );

        const status = await this.retrieve();

        for (const [key, value] of Object.entries(data)) {
          status[key] = value;
        }

        return await onboardingRepository.save(status);
      }
    );
  }
}

export default OnboardingService;

import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  AdminAdded,
  AdminRemoved,
  Committed,
  CommittedDepositWithdrawn,
  Deposited,
  DepositedAndCommitted,
  DepositsPaused,
  DepositsUnpaused,
  FeeCollected,
  NextFeeBeneficiaryChanged,
  NextFeeFractionChanged,
  OpenDepositWithdrawn,
  Opened,
  Rewarded,
  RolledOver,
  SponsorshipAndFeesWithdrawn,
  SponsorshipDeposited,
  Withdrawn
} from "../generated/Contract/Contract"
import { ExampleEntity } from "../generated/schema"

export function handleAdminAdded(event: AdminAdded): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.admin = event.params.admin

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.accountedBalance(...)
  // - contract.balance(...)
  // - contract.balanceOf(...)
  // - contract.cToken(...)
  // - contract.calculateWinner(...)
  // - contract.canLock(...)
  // - contract.committedBalanceOf(...)
  // - contract.committedSupply(...)
  // - contract.cooldownDuration(...)
  // - contract.cooldownEndAt(...)
  // - contract.currentCommittedDrawId(...)
  // - contract.currentOpenDrawId(...)
  // - contract.daiToken(...)
  // - contract.estimatedInterestRate(...)
  // - contract.getDraw(...)
  // - contract.isAdmin(...)
  // - contract.isLocked(...)
  // - contract.lockDuration(...)
  // - contract.lockEndAt(...)
  // - contract.moveCommitted(...)
  // - contract.nextFeeBeneficiary(...)
  // - contract.nextFeeFraction(...)
  // - contract.openBalanceOf(...)
  // - contract.openSupply(...)
  // - contract.paused(...)
  // - contract.poolToken(...)
  // - contract.saiPool(...)
  // - contract.saiToken(...)
  // - contract.scdMcdMigration(...)
  // - contract.sponsorshipAndFeeBalanceOf(...)
  // - contract.supplyRatePerBlock(...)
  // - contract.token(...)
  // - contract.totalBalanceOf(...)
  // - contract.withdrawCommittedDeposit(...)
  // - contract.withdrawCommittedDepositFrom(...)
}

export function handleAdminRemoved(event: AdminRemoved): void {}

export function handleCommitted(event: Committed): void {}

export function handleCommittedDepositWithdrawn(
  event: CommittedDepositWithdrawn
): void {}

export function handleDeposited(event: Deposited): void {}

export function handleDepositedAndCommitted(
  event: DepositedAndCommitted
): void {}

export function handleDepositsPaused(event: DepositsPaused): void {}

export function handleDepositsUnpaused(event: DepositsUnpaused): void {}

export function handleFeeCollected(event: FeeCollected): void {}

export function handleNextFeeBeneficiaryChanged(
  event: NextFeeBeneficiaryChanged
): void {}

export function handleNextFeeFractionChanged(
  event: NextFeeFractionChanged
): void {}

export function handleOpenDepositWithdrawn(event: OpenDepositWithdrawn): void {}

export function handleOpened(event: Opened): void {}

export function handleRewarded(event: Rewarded): void {}

export function handleRolledOver(event: RolledOver): void {}

export function handleSponsorshipAndFeesWithdrawn(
  event: SponsorshipAndFeesWithdrawn
): void {}

export function handleSponsorshipDeposited(event: SponsorshipDeposited): void {}

export function handleWithdrawn(event: Withdrawn): void {}

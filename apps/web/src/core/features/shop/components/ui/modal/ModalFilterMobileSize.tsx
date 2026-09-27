import Modal from "@/core/components/custom/ui/modal/Modal";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { Dispatch, SetStateAction } from "react";
import { ShopFiltersState } from "../../../assets/@types/ShopFilters";
import { ShopFilters } from "../filter/Shopfilters";

function ModalFilterMobileSize({
  setFilters,
  filters,
  setFilterModalOpen,
  isFilterModalOpen,
}: {
  filters: ShopFiltersState;
  setFilters: Dispatch<SetStateAction<ShopFiltersState>>;
  setFilterModalOpen: (v: boolean) => void;
  isFilterModalOpen: boolean;
}) {
  return (
    <Modal
      open={isFilterModalOpen}
      onOpenChange={setFilterModalOpen}
      title="فیلترها"
      size="md"
      hideDefaultFooter
    >
      <ShopFilters value={filters} onChange={setFilters} />
      <Button className="mt-4 w-full" onClick={() => setFilterModalOpen(false)}>
        اعمال فیلتر
      </Button>
    </Modal>
  );
}

export default ModalFilterMobileSize;

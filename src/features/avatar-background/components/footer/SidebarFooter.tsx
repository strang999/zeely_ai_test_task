import { Button } from "../../../../shared/ui";
import { useBackgroundStore } from "../../store/background-store";

export function SidebarFooter() {
  const { closeSidebar } = useBackgroundStore();

  const handleSave = () => {
    closeSidebar();
  };

  return (
    <footer className="flex gap-3 border-t border-border px-6 py-4">
      <Button variant="secondary" onClick={closeSidebar} className="flex-1">
        Cancel
      </Button>
      <Button variant="primary" onClick={handleSave} className="flex-1">
        Save
      </Button>
    </footer>
  );
}

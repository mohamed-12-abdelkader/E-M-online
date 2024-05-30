import React from "react";
import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { MdOutlineDeleteOutline } from "react-icons/md";

const AlertDialogComponent = ({
  isOpen,
  onClose,
  onConfirm,
  selectedItem,
  cancelRef,
}) => (
  <AlertDialog
    isOpen={isOpen}
    leastDestructiveRef={cancelRef}
    onClose={onClose}
  >
    <AlertDialogOverlay>
      <AlertDialogContent>
        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          {selectedItem
            ? `حذف ${selectedItem.v_name || selectedItem.pdf_name}`
            : ""}
        </AlertDialogHeader>
        <AlertDialogBody>
          {selectedItem
            ? `هل بالتاكيد تريد حذف ${
                selectedItem.v_name || selectedItem.pdf_name
              }؟`
            : ""}
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose} className="mx-1">
            إلغاء
          </Button>
          <Button colorScheme="red" onClick={onConfirm} ml={3} className="mx-1">
            <MdOutlineDeleteOutline />
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogOverlay>
  </AlertDialog>
);

export default AlertDialogComponent;

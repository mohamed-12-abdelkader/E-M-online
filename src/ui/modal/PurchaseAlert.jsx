import React from "react";
import {
  AlertDialog,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Spinner,
} from "@chakra-ui/react";

const PurchaseAlert = ({
  isOpen,
  onClose,
  cancelRef,
  selectedLecture,
  buyLoading,
  buyMonth,
}) => (
  <AlertDialog
    isOpen={isOpen}
    leastDestructiveRef={cancelRef}
    onClose={onClose}
  >
    <AlertDialogOverlay>
      <AlertDialogContent className="p-2">
        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          شراء الكورس
        </AlertDialogHeader>
        <div>
          {selectedLecture && (
            <>
              <h1 className="font-bold m-3">
                - هل بالتأكيد تريد شراء {selectedLecture.description}؟
              </h1>
              <h1 className="font-bold m-3">
                - سوف يتم خصم {selectedLecture.price} جنية من محفظتك ثمن الكورس
              </h1>
              <h1 className="font-bold m-3 text-red-500">
                - تاكد من عملية الشراء جيدا قبل اتمامها لان المنصة غير مسئولة عن
                اى عملية شراء خطاء
              </h1>
              <div style={{ direction: "ltr" }}>
                <Button
                  ref={cancelRef}
                  colorScheme="red"
                  onClick={onClose}
                  className="m-1"
                >
                  الغاء
                </Button>
                <Button
                  colorScheme="blue"
                  ml={3}
                  className="m-1"
                  onClick={() => buyMonth(selectedLecture.id)}
                  isDisabled={buyLoading}
                >
                  {buyLoading ? <Spinner /> : "نعم شراء"}
                </Button>
              </div>
            </>
          )}
        </div>
      </AlertDialogContent>
    </AlertDialogOverlay>
  </AlertDialog>
);

export default PurchaseAlert;

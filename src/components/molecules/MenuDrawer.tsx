import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;

  return (
    <>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody bg="gray.100" p={0}>
              <Button w="100%">TOP</Button>
              <Button w="100%">ユーザ一覧</Button>
              <Button w="100%">設定</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
});

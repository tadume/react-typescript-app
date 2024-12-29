import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { FC, memo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

export const HeaderLayout: FC<{ children: ReactNode }> = memo((props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { children } = props;
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        {/* アプリ名 */}
        <Flex as="a" mr={8} _hover={{ cursor: 'pointer' }}>
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
            ユーザ管理アプリ
          </Heading>
        </Flex>

        {/* リンク(Webで表示) */}
        <Flex display={{ base: 'none', md: 'flex' }} flexGrow={2}>
          <Box pr={4}>
            <Link to="/home/users">ユーザ一覧</Link>
          </Box>
          <Link to="/home/setting">設定</Link>
        </Flex>
        {/* アイコン(スマホで表示) */}
        <IconButton
          aria-label="メニューボタン"
          icon={<HamburgerIcon />}
          variant="unstyled"
          size="sm"
          display={{ base: 'block', md: 'none' }}
          onClick={onOpen}
        />
      </Flex>
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
      {children}
    </>
  );
});

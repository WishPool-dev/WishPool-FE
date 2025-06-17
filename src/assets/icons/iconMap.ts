'use client';

import BackIcon from '@/assets/icons/svg/icon_back.svg';
import CancelIcon from '@/assets/icons/svg/icon_cancel.svg';
import giftIcon from '@/assets/icons/svg/icon_gift.svg';
import HomeIcon from '@/assets/icons/svg/icon_home.svg';
import MenuIcon from '@/assets/icons/svg/icon_menu.svg';
import photoIcon from '@/assets/icons/svg/icon_photo.svg';
import WishIcon from '@/assets/icons/svg/icon_wish.svg';

export const iconMap = {
  back: BackIcon,
  home: HomeIcon,
  menu: MenuIcon,
  wish: WishIcon,
  cancel: CancelIcon,
  gift: giftIcon,
  photo: photoIcon,
} as const;

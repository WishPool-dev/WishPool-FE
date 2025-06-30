'use client';

import BackIcon from '@/assets/icons/svg/icon_back.svg';
import CancelIcon from '@/assets/icons/svg/icon_cancel.svg';
import DotIcon from '@/assets/icons/svg/icon_dot.svg';
import GiftIcon from '@/assets/icons/svg/icon_gift.svg';
import HomeIcon from '@/assets/icons/svg/icon_home.svg';
import MenuIcon from '@/assets/icons/svg/icon_menu.svg';
import PhotoIcon from '@/assets/icons/svg/icon_photo.svg';
import WishIcon from '@/assets/icons/svg/icon_wish.svg';

export const iconMap = {
  back: BackIcon,
  home: HomeIcon,
  menu: MenuIcon,
  wish: WishIcon,
  cancel: CancelIcon,
  gift: GiftIcon,
  photo: PhotoIcon,
  dot: DotIcon,
} as const;

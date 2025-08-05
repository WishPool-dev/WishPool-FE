'use client';

import BackIcon from '@/assets/icons/svg/icon_back.svg';
import BirthdayIcon from '@/assets/icons/svg/icon_birthday.svg';
import GiftButtonIcon from '@/assets/icons/svg/icon_button_gift.svg';
import CalendarIcon from '@/assets/icons/svg/icon_calender.svg';
import CameraIcon from '@/assets/icons/svg/icon_camera.svg';
import CancelIcon from '@/assets/icons/svg/icon_cancel.svg';
import CheerIcon from '@/assets/icons/svg/icon_cheer.svg';
import DotIcon from '@/assets/icons/svg/icon_dot.svg';
import DownIcon from '@/assets/icons/svg/icon_down.svg';
import GiftIcon from '@/assets/icons/svg/icon_gift.svg';
import HomeIcon from '@/assets/icons/svg/icon_home.svg';
import KaKaoIcon from '@/assets/icons/svg/icon_kakao.svg';
import MenuIcon from '@/assets/icons/svg/icon_menu.svg';
import MoreIcon from '@/assets/icons/svg/icon_more.svg';
import PhotoIcon from '@/assets/icons/svg/icon_photo.svg';
import TrashIcon from '@/assets/icons/svg/icon_trash.svg';
import UpIcon from '@/assets/icons/svg/icon_up.svg';
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
  down: DownIcon,
  up: UpIcon,
  giftButton: GiftButtonIcon,
  calendar: CalendarIcon,
  camera: CameraIcon,
  birthday: BirthdayIcon,
  kakao: KaKaoIcon,
  more: MoreIcon,
  trash: TrashIcon,
  cheer: CheerIcon,
} as const;

export type IconName = keyof typeof iconMap;

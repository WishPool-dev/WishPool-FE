import { GiftItemDto } from '@/api/domain/join/types';
import Icon from '@/components/common/Icon';

type GiftFieldProps = {
  index: number;
  label: string;
  placeholder?: string;
  maxLength?: number;
  valueItemName: string;
  valueLink: string;
  onChangeItemName: (v: string) => void;
  onChangeLink: (v: string) => void;
  onRemove: () => void;
};
const STORAGE_KEY = 'wishpool_gifts';

function readGifts(): GiftItemDto[] {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeGifts(next: GiftItemDto[]) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

function patchGift(index: number, patch: Partial<GiftItemDto>) {
  const current = readGifts();

  const base: GiftItemDto = current[index] ?? { itemName: '', itemUrl: '' };
  const next = [...current];
  next[index] = { ...base, ...patch };
  writeGifts(next);
}

const GiftField = ({
  index,
  label,
  placeholder,
  maxLength,
  valueItemName,
  valueLink,
  onChangeItemName,
  onChangeLink,
  onRemove,
}: GiftFieldProps) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newItemName = e.target.value;
    onChangeItemName(newItemName);
    patchGift(index, { itemName: newItemName });
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrlName = e.target.value;
    onChangeLink(newUrlName);
    patchGift(index, { itemUrl: newUrlName });
  };

  return (
    <>
      <div className="mt-[4rem] mb-[0.8rem] flex justify-between">
        <p className="subtitle2 text-text max-w-[430px]">{label}</p>
        <button
          className="flex items-center justify-center"
          type="button"
          onClick={onRemove}
        >
          <Icon name="trash" width={20} height={20} />
        </button>
      </div>
      <div className="relative w-full">
        <input
          name="itemName"
          placeholder={placeholder}
          maxLength={maxLength}
          value={valueItemName}
          className="body1 flex h-[5.6rem] w-full rounded-[12px] border border-gray-400 px-[1.6rem] py-[1.6rem] placeholder:text-gray-400 focus:border-gray-400 focus:outline-none"
          onChange={handleNameChange}
        />
        {maxLength && (
          <div className="caption2 absolute right-[1.6rem] bottom-[2rem] mt-[0.4rem] text-gray-600">
            {valueItemName.length}/{maxLength}
          </div>
        )}
      </div>
      <div className="mt-[1.2rem]">
        <input
          placeholder="선물 판매 링크를 붙여넣기 해 주세요."
          type="url"
          name="itemLink"
          value={valueLink}
          onChange={handleUrlChange}
          className="body1 flex h-[5.6rem] w-full rounded-[12px] border border-gray-400 px-[1.6rem] py-[1.6rem] placeholder:text-gray-400 focus:border-gray-400 focus:outline-none"
        />
      </div>
    </>
  );
};

export default GiftField;

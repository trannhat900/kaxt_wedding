import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface BankAccount {
  id: number;
  owner: string;
  bankName: string;
  accountNumber: string;
  accountName: string;
  qrCode?: string;
}

interface GiftRegistryProps {
  isOpen: boolean;
  onClose: () => void;
}

const account: BankAccount = {
  id: 1,
  owner: 'Cô dâu - Kim Anh',
  bankName: 'Timo by BVBank (Ngân hàng Bản Việt)',
  accountNumber: '0353317992',
  accountName: 'TRAN THI KIM ANH',
  qrCode: '/bank-qr/bride-qr.png',
};

const GiftRegistry = ({ isOpen, onClose }: GiftRegistryProps) => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, type: 'spring' }}
          className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-br from-blush-500 to-blush-600 text-white p-6 rounded-t-3xl relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl transition-colors z-10"
              aria-label="Đóng"
            >
              ✕
            </button>
            <div className="text-center">
              <div className="text-6xl mb-3">💝</div>
              <h2 className="text-3xl font-serif font-bold mb-2">Gửi mừng cưới</h2>
              <p className="text-white/90 text-sm">
                Cảm ơn bạn đã gửi lời chúc đến đôi uyên ương
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Owner */}
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">👰</div>
              <h3 className="text-2xl font-serif font-semibold text-gray-800">
                {account.owner}
              </h3>
            </div>

            {/* QR Code */}
            {account.qrCode && (
              <div className="mb-6">
                <div className="aspect-square max-w-sm mx-auto bg-gradient-to-br from-blush-50 to-champagne-50 rounded-2xl p-6 shadow-lg">
                  <img
                    src={account.qrCode}
                    alt={`QR Code ${account.owner}`}
                    className="w-full h-full object-contain rounded-xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const parent = target.parentElement;
                      if (parent) parent.style.display = 'none';
                    }}
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mt-3">
                  📱 Quét mã QR để chuyển khoản nhanh
                </p>
              </div>
            )}

            {/* Bank Info */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blush-50 to-champagne-50 rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Ngân hàng</p>
                <p className="text-lg font-semibold text-gray-800">
                  {account.bankName}
                </p>
              </div>

              <div className="bg-gradient-to-r from-blush-50 to-champagne-50 rounded-xl p-4">
                <div className="flex justify-between items-center gap-3">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-1">Số tài khoản</p>
                    <p className="text-xl font-mono font-bold text-blush-600">
                      {account.accountNumber}
                    </p>
                  </div>
                  <motion.button
                    onClick={() => copyToClipboard(account.accountNumber, 1)}
                    className="px-4 py-2 bg-white rounded-lg hover:bg-blush-100 transition-colors text-sm font-medium shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {copiedId === 1 ? '✓ Đã sao' : '📋 Sao chép'}
                  </motion.button>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blush-50 to-champagne-50 rounded-xl p-4">
                <div className="flex justify-between items-center gap-3">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-1">Chủ tài khoản</p>
                    <p className="text-lg font-semibold text-gray-800">
                      {account.accountName}
                    </p>
                  </div>
                  <motion.button
                    onClick={() => copyToClipboard(account.accountName, 2)}
                    className="px-4 py-2 bg-white rounded-lg hover:bg-blush-100 transition-colors text-sm font-medium shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {copiedId === 2 ? '✓ Đã sao' : '📋 Sao chép'}
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Copy All Button */}
            <motion.button
              onClick={() => {
                const fullInfo = `${account.bankName}\nSTK: ${account.accountNumber}\nChủ TK: ${account.accountName}`;
                copyToClipboard(fullInfo, 3);
              }}
              className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blush-500 to-blush-600 hover:from-blush-600 hover:to-blush-700 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {copiedId === 3 ? '✓ Đã sao chép tất cả' : '📋 Sao chép tất cả thông tin'}
            </motion.button>

            {/* Note */}
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-sm text-gray-700 text-center">
                💝 <strong>Nội dung chuyển khoản:</strong><br />
                <span className="text-blush-600 font-semibold">"Mừng cưới Kim Anh & Xuân Tụy"</span>
              </p>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              Sự hiện diện và lời chúc phúc của bạn là món quà ý nghĩa nhất! 🙏
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GiftRegistry;

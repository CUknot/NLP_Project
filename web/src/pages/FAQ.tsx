
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Updated FAQ data structure with Thai and English content
const faqItems = [
  {
    id: '1',
    questionTH: 'Booking.com เก็บข้อมูลส่วนบุคคลประเภทใดบ้าง?',
    questionEN: 'What types of personal data does Booking.com collect?',
    answerTH: 'Booking.com จะรวบรวมข้อมูลส่วนบุคคลที่คุณให้ เช่น ชื่อ-นามสกุล ที่อยู่ อีเมล และข้อมูลการจอง รวมถึงข้อมูลที่เก็บโดยอัตโนมัติ เช่น ข้อมูลเครื่องมือและคุกกี้',
    answerEN: 'Booking.com collects personal data you provide (name, address, email, booking details), as well as automatically collected data such as device info and cookies'
  },
  {
    id: '2',
    questionTH: 'คุกกี้ถูกใช้เพื่ออะไรบ้าง?',
    questionEN: 'What are cookies used for?',
    answerTH: 'คุกกี้ช่วยให้ Booking.com จำค่าการตั้งค่าและความต้องการของคุณ (เช่น ภาษา สกุลเงิน) ปรับปรุงประสบการณ์ใช้งาน และวิเคราะห์พฤติกรรมผู้ใช้เพื่อปรับปรุงบริการ',
    answerEN: 'Cookies enable Booking.com to remember your settings (e.g., language, currency), enhance your experience, and analyze usage patterns to improve the service'
  },
  {
    id: '3',
    questionTH: 'ระบบแนะนำที่พักของ Booking.com ทำงานอย่างไร?',
    questionEN: 'How does Booking.com\'s accommodation recommendation system work?',
    answerTH: 'ระบบจะใช้ปัจจัยจากแบบฟอร์มการค้นหา (จุดหมาย วันเดินทาง จำนวนคน) พฤติกรรมการค้นหาครั้งก่อนๆ และประสิทธิภาพของที่พัก (อัตราคลิกและจอง) เพื่อแนะนำตัวเลือกที่คาดว่าจะถูกใจคุณที่สุด',
    answerEN: 'The system leverages search-form inputs (destination, dates, party size), past search behavior, and accommodation performance metrics (clicks, bookings) to surface the options most likely to suit you'
  },
  {
    id: '4',
    questionTH: 'รีวิวและคะแนนที่พักถูกจัดอันดับอย่างไร?',
    questionEN: 'How are accommodation reviews and ratings ranked?',
    answerTH: 'รีวิวจะแสดงตาม "รีวิวที่มีประโยชน์ที่สุด" (เรียงลำดับตามวันที่และความสมบูรณ์ของคำแนะนำ) และเกณฑ์อื่นๆ เช่น ระยะทาง ดาวเฉลี่ย และจำนวนรีวิว',
    answerEN: 'Reviews are ordered by "most helpful" (based on recency and completeness), plus factors like distance, star rating, and review count'
  },
  {
    id: '5',
    questionTH: 'หากเกิดเหตุการณ์ไม่คาดคิดในการเข้าพัก จะขอความช่วยเหลืออย่างไร?',
    questionEN: 'What should I do if something goes wrong with my stay?',
    answerTH: 'หากการจองไม่เป็นไปตามคาด ให้ติดต่อผ่านหน้า "การจองของฉัน" ในเว็บไซต์หรือแอป หรือไปยังศูนย์ช่วยเหลือ',
    answerEN: 'If your booking doesn\'t meet expectations, contact us via your "My Bookings" page on the site/app or reach out to the Help Center'
  },
  {
    id: '6',
    questionTH: 'Booking.com สร้างรายได้จากบริการอย่างไร?',
    questionEN: 'How does Booking.com generate revenue?',
    answerTH: 'Booking.com รับค่าคอมมิชชั่นจากผู้ให้บริการที่พักทุกครั้งหลังการเข้าพัก และมีโปรแกรมโฆษณาสำหรับผู้ให้บริการที่ต้องการปรากฏในตำแหน่งพิเศษ',
    answerEN: 'Booking.com earns commissions from accommodation providers after each stay and offers a Sponsored Ads program for providers seeking premium placement'
  },
  {
    id: '7',
    questionTH: 'ข้อกำหนดการให้บริการฉบับนี้ใช้กับบริการใดบ้าง?',
    questionEN: 'Which services are covered by these Terms of Service?',
    answerTH: 'เอกสารนี้ครอบคลุมทุกผลิตภัณฑ์การเดินทางบนแพลตฟอร์ม เช่น ที่พัก สิ่งที่น่าสนใจ รถเช่า เที่ยวบิน และการขนส่งประเภทต่างๆ',
    answerEN: 'This Terms of Service covers all travel products on the platform, including accommodations, attractions, car rentals, flights, and various transport services'
  },
  {
    id: '8',
    questionTH: 'หากมีข้อพิพาทหรือร้องเรียน ต้องดำเนินการอย่างไร?',
    questionEN: 'How can I file a complaint or resolve disputes?',
    answerTH: 'ผู้ใช้สามารถติดต่อฝ่ายลูกค้าสัมพันธ์ผ่านระบบเว็บหรือแอป หากไม่พอใจกับการตอบสนอง สัญญา ODR ของ EC จะเปิดทางเลือกสำหรับสินค้าและบริการที่เกี่ยวกับที่พักหรือเที่ยวบิน',
    answerEN: 'Users may contact Customer Relations via the website/app. If unsatisfied, the EU\'s ODR platform is available for accommodations or flights disputes'
  },
  {
    id: '9',
    questionTH: '"แนวทางและมาตรฐานเนื้อหา" ใน policy.pdf คืออะไร?',
    questionEN: 'What are the "Content Guidelines and Standards" in policy.pdf?',
    answerTH: 'คือชุดแนวทางที่กำหนดรูปแบบและการกลั่นกรองเนื้อหาทุกประเภทบนแพลตฟอร์ม เพื่อให้คงความเกี่ยวข้องและเหมาะสมโดยไม่ละเมิดเสรีภาพการแสดงออก',
    answerEN: 'They are the set of rules for content moderation across the platform, ensuring relevance and appropriateness without unduly limiting free expression'
  },
  {
    id: '10',
    questionTH: 'ผู้ใช้ต้องยอมรับเอกสารใดบ้างก่อนใช้งาน Booking.com?',
    questionEN: 'Which documents must users accept before using Booking.com?',
    answerTH: 'ผู้ใช้ต้องยอมรับข้อกำหนดการให้บริการ (policy.pdf), วิธีการทำงาน (how_we_work.pdf) และแถลงการณ์ความเป็นส่วนตัวและคุกกี้ (privacy_notice_and_cookie_statement.pdf) ทั้งหมดจึงจะสามารถใช้บริการได้',
    answerEN: 'Users must accept the Terms of Service (policy.pdf), How We Work (how_we_work.pdf), and the Privacy & Cookie Statement (privacy_notice_and_cookie_statement.pdf) before using the service'
  }
];

const FAQ = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [language, setLanguage] = useState<'TH' | 'EN'>('EN');
  const navigate = useNavigate();

  const navigateToChat = () => {
    navigate('/chat');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'TH' ? 'EN' : 'TH');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="inline-block py-1 px-3 bg-secondary rounded-full text-sm font-medium text-primary">
                {language === 'TH' ? 'ศูนย์ช่วยเหลือ' : 'Help Center'}
              </span>
              <button 
                onClick={toggleLanguage}
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                aria-label="Toggle language"
                title={language === 'TH' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย'}
              >
                <Globe size={16} className="text-primary" />
              </button>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {language === 'TH' ? 'คำถามที่พบบ่อย 10 ข้อ' : 'Top 10 Questions'}
            </h1>
            <p className="text-muted-foreground">
              {language === 'TH' 
                ? 'คำถามที่พบบ่อยเกี่ยวกับการจองที่พักเพื่อช่วยให้คุณวางแผนการเข้าพักได้ดีขึ้น' 
                : 'Commonly asked questions about hotel accommodations to help you plan your stay better.'}
            </p>
            <button 
              onClick={navigateToChat}
              className="mt-4 flex items-center justify-center mx-auto w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              title={language === 'TH' ? 'ไปที่แชท' : 'Go to Chat'}
            >
              <MessageCircle size={20} className="text-primary" />
            </button>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white dark:bg-secondary/20 rounded-xl p-6 shadow-soft border border-border/50">
            <Accordion type="multiple" value={expandedItems} onValueChange={setExpandedItems}>
              {faqItems.map((item) => (
                <AccordionItem key={item.id} value={`item-${item.id}`}>
                  <AccordionTrigger className="text-left">
                    {language === 'TH' ? item.questionTH : item.questionEN}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      {language === 'TH' ? item.answerTH : item.answerEN}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FAQ;

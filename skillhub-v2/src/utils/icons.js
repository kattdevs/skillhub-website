import {
  Globe, Code2, BookOpen, Shield, Cloud, BarChart3, Lightbulb,
  Megaphone, Palette, Building2, Landmark, GraduationCap,
  HeartPulse, Banknote, ShoppingCart, Users, Store,
  ArrowRight, ArrowUpRight, Check, Plus, Minus, X, Menu,
  Search, User, Mail, Phone, MapPin, Send, CheckCircle,
  Loader2, Calendar, Clock, Layers, Zap, Users2, Lock, Heart,
  ExternalLink, ChevronRight, ChevronDown,
} from 'lucide-react'

const iconMap = {
  Globe, Code2, BookOpen, Shield, Cloud, BarChart3, Lightbulb,
  Megaphone, Palette, Building2, Landmark, GraduationCap,
  HeartPulse, Banknote, ShoppingCart, Users, Store,
  ArrowRight, ArrowUpRight, Check, Plus, Minus, X, Menu,
  Search, User, Mail, Phone, MapPin, Send, CheckCircle,
  Loader2, Calendar, Clock, Layers, Zap, Users2, Lock, Heart,
  ExternalLink, ChevronRight, ChevronDown,
}

export function getIcon(name) {
  return iconMap[name] || Globe
}
